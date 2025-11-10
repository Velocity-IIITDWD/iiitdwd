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
import { useEffect, useRef, useState } from "react";

export default function DesktopHeader(): JSX.Element {
  const { query } = useKBar();
  const [openMenu, setOpenMenu] = useState<string>("");
  const [isMacOS, setIsMacOS] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentMenuRef = useRef<string>("");

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

  // Smooth open/close with proper hover tracking
  const handleMouseEnter = (title: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    currentMenuRef.current = title;
    setOpenMenu(title);
  };

  const handleMouseLeave = (title: string) => {
    // Only start timeout if we're leaving the currently tracked menu
    if (currentMenuRef.current === title) {
      closeTimeoutRef.current = setTimeout(() => {
        // Only close if we haven't entered another menu
        if (currentMenuRef.current === title) {
          currentMenuRef.current = "";
          setOpenMenu("");
        }
      }, 300);
    }
  };

  const renderMenuItems = (
    items: NavigationItem[],
    parentMenuTitle: string
  ) => {
    return items.map((item, index) => {
      if (item.items && item.items.length > 0) {
        return (
          <MenubarSub key={index}>
            <MenubarSubTrigger
              className="data-[state=open]:bg-primary data-[state=open]:!text-white hover:bg-primary hover:!text-white rounded-r-md transition-all duration-150 ease-out hover:border-primary"
              onMouseEnter={() => handleMouseEnter(parentMenuTitle)}
              onMouseLeave={() => handleMouseLeave(parentMenuTitle)}
            >
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
                onMouseEnter={() => handleMouseEnter(parentMenuTitle)}
                onMouseLeave={() => handleMouseLeave(parentMenuTitle)}
              >
                {renderMenuItems(item.items, parentMenuTitle)}
              </motion.div>
            </MenubarSubContent>
          </MenubarSub>
        );
      } else {
        return (
          <MenubarItem
            key={index}
            asChild
            onMouseEnter={() => handleMouseEnter(parentMenuTitle)}
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
              className="hover:bg-primary hover:text-white transition-all duration-150 ease-out block hover:border-primary"
              onMouseEnter={() => handleMouseEnter(parentMenuTitle)}
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
      className="border-b max-lg:hidden border-none px-2 flex items-center"
      value={openMenu}
      onValueChange={setOpenMenu}
    >
      {navigationData.map((item, index) => (
        <MenubarMenu key={index} value={item.title}>
          <MenubarTrigger
            asChild={!!item?.href}
            className="font-bold text-[14.7px] leading-tight text-gray-900 data-[state=open]:bg-primary data-[state=open]:!text-white hover:bg-primary hover:!text-white rounded-md px-3 py-1.5 transition-all duration-150 ease-out"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={() => handleMouseLeave(item.title)}
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
              <Link
                href={item.href}
                className="block font-bold text-[14.7px] leading-tight text-gray-900 px-3 py-1.5"
              >
                {item.title}
              </Link>
            ) : (
              item.title
            )}
          </MenubarTrigger>
          {item.items && item.items.length > 0 && (
            <MenubarContent
              asChild
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={() => handleMouseLeave(item.title)}
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
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={() => handleMouseLeave(item.title)}
              >
                {renderMenuItems(item.items, item.title)}
              </motion.div>
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}

      {/* Search button - shows only when scrolled */}
      {isScrolled && (
        <button
          className="text-gray-600 hover:text-primary rounded-full bg-tertiary/20 px-2 py-1 flex items-center text-body cursor-pointer transition-colors duration-150 ml-4"
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
