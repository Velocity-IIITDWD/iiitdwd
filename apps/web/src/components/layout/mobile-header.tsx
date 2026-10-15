"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import navigationData from "@/data/navigation";
import { trackEvent } from "@/lib/ga";
import { NavigationItem } from "@/types/navigation";
import { useKBar } from "kbar";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileHeader({
  toggleMenu,
}: {
  toggleMenu: () => void;
}) {
  const hasChildren = (item: any) => {
    return item.items && item.items.length > 0;
  };

  const { query } = useKBar();
  const [openMenu, setOpenMenu] = useState<string>("");
  const [isMacOS, setIsMacOS] = useState(false);

  useEffect(() => {
    setIsMacOS(window.navigator.platform.toLowerCase().includes("mac"));
  }, []);

  return (
    <div className="py-2 flex flex-col justify-between gap-6 px-1 sm:px-2 w-full">
      <nav className="flex flex-col space-y-1">
        {navigationData.map((item: NavigationItem, index) => {
          if (hasChildren(item)) {
            return (
              <motion.div
                key={`level1-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: (index * 0.4) / navigationData.length,
                }}
                className="border-b border-gray-100"
              >
                <Collapsible className="w-full">
                  <CollapsibleTrigger
                    className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-primary hover:bg-secondary/50 rounded-md"
                    onClick={() =>
                      trackEvent({
                        action: "click",
                        category: "navigation",
                        label: `expand_menu_${item.title}`,
                      })
                    }
                  >
                    {item.title}
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="">
                    <div className="flex flex-col py-2">
                      {item?.items!.map((subItem, subIndex) => {
                        if (hasChildren(subItem)) {
                          return (
                            <Collapsible
                              key={`level2-${subIndex}`}
                              className="w-full"
                            >
                              <CollapsibleTrigger
                                className="flex items-center hover:bg-secondary/50 justify-between w-full py-2 pl-6 pr-3 text-left text-primary border-l-2 hover:border-primary"
                                onClick={() =>
                                  trackEvent({
                                    action: "click",
                                    category: "navigation",
                                    label: `expand_submenu_${subItem.title}`,
                                  })
                                }
                              >
                                {subItem.title}
                                <ChevronRight className="h-4 w-4 text-gray-500" />
                              </CollapsibleTrigger>
                              <CollapsibleContent className="">
                                <div className="flex flex-col">
                                  {subItem.items!.map(
                                    (thirdItem, thirdIndex) => (
                                      <Link
                                        key={`level3-${thirdIndex}`}
                                        href={thirdItem.href}
                                        className="py-2 pl-12 text-primary border-l-2 hover:border-primary hover:bg-secondary/50"
                                        onClick={() => {
                                          toggleMenu();
                                          trackEvent({
                                            action: "click",
                                            category: "navigation",
                                            label: `link_${thirdItem.title}`,
                                          });
                                        }}
                                      >
                                        {thirdItem.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          );
                        } else {
                          return (
                            <Link
                              key={`level2-simple-${subIndex}`}
                              href={subItem.href}
                              className="py-2 pl-6 border-l-2 hover:border-primary hover:bg-secondary/50 -left-1 text-primary"
                              onClick={() => {
                                toggleMenu();
                                trackEvent({
                                  action: "click",
                                  category: "mobile_navigation" as any,
                                  label: `link_${subItem.title}`,
                                });
                              }}
                            >
                              {subItem.title}
                            </Link>
                          );
                        }
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={`level1-simple-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100"
              >
                <Link
                  href={item.href}
                  className="flex items-center w-full py-3 px-2 text-left font-medium text-primary hover:bg-gray-50 rounded-md"
                  onClick={() => {
                    toggleMenu();
                    trackEvent({
                      action: "click",
                      category: "mobile_navigation" as any,
                      label: `link_${item.title}`,
                    });
                  }}
                >
                  {item.title}
                </Link>
              </motion.div>
            );
          }
        })}
      </nav>

      <button
        className="w-full text-gray-700 hover:text-primary rounded-xl bg-gray-100 hover:bg-gray-200/80 px-4 py-3 flex items-center justify-between text-sm font-medium cursor-pointer transition-colors shadow-xs"
        onClick={() => {
          toggleMenu();
          query.toggle();
        }}
      >
        <div className="flex items-center">
          <Search size={16} className="mr-3 text-gray-500" />
          <span>What are you looking for?</span>
        </div>
        <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-gray-400">
          Search
        </span>
      </button>

      <div className="pt-4 border-t border-gray-200">
        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
          Quick Portals
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
          <Link
            href="https://iiitdwd.samarth.edu.in/index.php/site/login"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              toggleMenu();
              trackEvent({
                action: "click",
                category: "mobile_navigation" as any,
                label: "link_samarth_portal",
              });
            }}
            className="p-2.5 rounded-lg bg-gray-50 hover:bg-[#CCE70B]/20 text-primary border border-gray-100 flex items-center justify-between"
          >
            <span>Samarth Portal</span>
            <span className="text-[10px] text-gray-400">↗</span>
          </Link>
          <Link
            href="https://aims.iiitdwd.ac.in/aims/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              toggleMenu();
              trackEvent({
                action: "click",
                category: "mobile_navigation" as any,
                label: "link_aims",
              });
            }}
            className="p-2.5 rounded-lg bg-gray-50 hover:bg-[#CCE70B]/20 text-primary border border-gray-100 flex items-center justify-between"
          >
            <span>AIMS</span>
            <span className="text-[10px] text-gray-400">↗</span>
          </Link>
          <Link
            href="/RTI"
            onClick={() => {
              toggleMenu();
              trackEvent({
                action: "click",
                category: "mobile_navigation" as any,
                label: "link_rti",
              });
            }}
            className="p-2.5 rounded-lg bg-gray-50 hover:bg-[#CCE70B]/20 text-primary border border-gray-100 flex items-center justify-between"
          >
            <span>RTI</span>
          </Link>
          <Link
            href="/academics/nirf"
            onClick={() => {
              toggleMenu();
              trackEvent({
                action: "click",
                category: "mobile_navigation" as any,
                label: "link_nirf",
              });
            }}
            className="p-2.5 rounded-lg bg-gray-50 hover:bg-[#CCE70B]/20 text-primary border border-gray-100 flex items-center justify-between"
          >
            <span>NIRF</span>
          </Link>
          <Link
            href="https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm?corpID=6862046"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              toggleMenu();
              trackEvent({
                action: "click",
                category: "mobile_navigation" as any,
                label: "link_fee_portal",
              });
            }}
            className="col-span-2 p-2.5 rounded-lg bg-gray-50 hover:bg-[#CCE70B]/20 text-primary border border-gray-100 flex items-center justify-between"
          >
            <span>Students Fee Portal</span>
            <span className="text-[10px] text-gray-400">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
