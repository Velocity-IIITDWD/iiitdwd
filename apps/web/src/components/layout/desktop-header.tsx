import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import navigationData from "@/data/navigation";
import { trackEvent } from "@/lib/ga";
import { NavigationItem } from "@/types/navigation";
import { useKBar } from "kbar";
import { Command, Search } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DesktopHeader() {
  const { query } = useKBar();
  const [openMenu, setOpenMenu] = useState<string>("");
  const [isMacOS, setIsMacOS] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", latest => {
    if (latest > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest == 0 && isScrolled) {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    setIsMacOS(window.navigator.platform.toLowerCase().includes("mac"));
  }, []);

  const renderMenuItems = (items: NavigationItem[]) => {
    return items.map((item, index) => {
      if (item.items && item.items.length > 0) {
        return (
          <MenubarSub key={index}>
            <MenubarSubTrigger className="hover:bg-primary hover:!text-white rounded-md transition-all duration-150 ease-out">
              {item.title}
            </MenubarSubTrigger>
            <MenubarSubContent asChild>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  staggerChildren: 0.1,
                }}
              >
                {item.items.map((subItem, subIndex) => {
                  if (subItem?.items && subItem.items.length > 0) {
                    return (
                      <MenubarSub key={subIndex}>
                        <MenubarSubTrigger className="hover:bg-primary hover:!text-white rounded-md transition-all duration-150 ease-out">
                          {subItem.title}
                        </MenubarSubTrigger>
                        <MenubarSubContent asChild>
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                              staggerChildren: 0.1,
                            }}
                          >
                            {subItem.items.map(
                              (
                                nestedItem: NavigationItem,
                                nestedIndex: number
                              ) => (
                                <MenubarItem key={nestedIndex} asChild>
                                  <Link
                                    href={nestedItem.href!}
                                    className="hover:bg-primary hover:!text-white rounded-md transition-all duration-150 ease-out px-2 py-1 block"
                                  >
                                    {nestedItem.title}
                                  </Link>
                                </MenubarItem>
                              )
                            )}
                          </motion.div>
                        </MenubarSubContent>
                      </MenubarSub>
                    );
                  } else {
                    return (
                      <MenubarItem key={subIndex} asChild>
                        <Link
                          href={subItem.href!}
                          className="hover:bg-primary hover:text-white rounded-md transition-all duration-150 ease-out"
                        >
                          {subItem.title}
                        </Link>
                      </MenubarItem>
                    );
                  }
                })}
              </motion.div>
            </MenubarSubContent>
          </MenubarSub>
        );
      } else {
        return (
          <MenubarItem
            key={index}
            asChild
            onClick={() =>
              trackEvent({
                action: "click",
                category: "navigation",
                label: `menu_item_${item.title}`,
              })
            }
          >
            <Link
              href={item.href!}
              className="hover:bg-primary hover:text-white rounded-md transition-all duration-150 ease-out"
            >
              {item.title}
            </Link>
          </MenubarItem>
        );
      }
    });
  };

  return (
    <Menubar
      className="border-b max-lg:hidden border-none px-2"
      value={openMenu}
      onValueChange={setOpenMenu}
    >
      {navigationData.map((item, index) => (
        <MenubarMenu key={index} value={item.title}>
          <MenubarTrigger
            className="font-bold text-[14.7px] leading-tight text-gray-900 hover:bg-primary hover:!text-white rounded-md px-3 py-1.5 transition-all duration-150 ease-out"
            onMouseEnter={() => setOpenMenu(item.title)}
            onClick={() =>
              item.href &&
              trackEvent({
                action: "click",
                category: "navigation",
                label: `main_menu_${item.title}`,
              })
            }
          >
            {item?.href ? (
              <Link href={item?.href} className="hover:!text-white">
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </MenubarTrigger>
          {item.items && item.items.length > 0 && (
            <MenubarContent
              asChild
              onMouseEnter={() => setOpenMenu(item.title)}
            >
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  staggerChildren: 0.1,
                }}
              >
                {renderMenuItems(item.items)}
              </motion.div>
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}

      {/* Search button - shows only when scrolled */}
      {isScrolled && (
        <button
          className="text-gray-600 hover:text-primary rounded-full bg-tertiary/20 px-2 py-1 flex items-center text-body cursor-pointer transition-colors duration-150"
          onClick={() => {
            query.toggle();
            trackEvent({
              action: "click",
              category: "search",
              label: "command_palette",
            });
          }}
        >
          <Search size={14} className="mr-3" />
          {isMacOS ? (
            <Command size={14} className="mr-1" />
          ) : (
            <span className="mr-1">Ctrl</span>
          )}
          K
        </button>
      )}
    </Menubar>
  );
}
