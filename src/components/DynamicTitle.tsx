import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavItem, navItems } from "./Navbar";

const DynamicTitle = () => {
  const { pathname } = useLocation();

  const generateRouteTitles = (items: NavItem[]): Record<string, string> => {
    const map: Record<string, string> = {};

    const traverse = (nav: NavItem[]) => {
      nav.forEach((item) => {
        if (item.path) {
          map[item.path] = item.title;
        }
        if (item.children) traverse(item.children);
      });
    };

    traverse(items);
    return map;
  };

  const routeTitles = generateRouteTitles(navItems);

  useEffect(() => {
    const title =
      routeTitles[pathname] || "আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট";
    document.title = `${title} | আল-মা'আরিফ ইন্টারন্যাশনাল ইনস্টিটিউট`;
  }, [pathname]);

  return null;
};

export default DynamicTitle;
