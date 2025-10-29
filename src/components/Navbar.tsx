import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface NavItem {
  title: string;
  path?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { title: "হোম", path: "/" },
  {
    title: "আমাদের সম্পর্কে",
    children: [
      { title: "এ এম আই টি সম্পর্কে", path: "/about" },
      { title: "লক্ষ্য ও উদ্দেশ্য", path: "/goals" },
      { title: "বৈশিষ্ট্যসমূহ", path: "/features" },
      { title: "নীতিমালা", path: "/policies" },
    ],
  },
  {
    title: "পরিচালক প্যানেল",
    children: [
      { title: "প্রতিষ্ঠাতা পরিচালক", path: "/founder-director" },
      { title: "পাঠ্যক্রম কমিটি", path: "/curriculum-committee" },
    ],
  },
  { title: "শিক্ষক প্যানেল", path: "/teachers" },
  {
    title: "কোর্সসমূহ",
    children: [
      { title: "তাজবীদসহ কুরআন শিক্ষা", path: "/courses/quran-nazira" },
      { title: "কুরআন হিফজ", path: "/courses/quran-hifz" },
      { title: "অনুবাদসহ কুরআন শিক্ষা", path: "/courses/quran-translation" },
      { title: "বুখারী ও মুসলিম হিফজ", path: "/courses/hadith-hifz" },
      { title: "শিশুদের ইসলাম শিক্ষা", path: "/courses/kids-islam" },
      { title: "আরবী ভাষা", path: "/courses/arabic-language" },
    ],
  },
  {
    title: "ভর্তি সংক্রান্ত",
    children: [
      { title: "ভর্তি প্রক্রিয়া ও যোগ্যতা", path: "/admission/process" },
      { title: "ফরম ও ভর্তি ফি", path: "/admission/form" },
      { title: "কোর্স ফি", path: "/admission/fees" },
    ],
  },
  { title: "নোটিশ বোর্ড", path: "/notice" },
  { title: "যোগাযোগ", path: "/contact" },
  { title: "ডোনেশন", path: "/donation" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenus((prev) => {
      const isCurrentlyOpen = prev[title];
      return isCurrentlyOpen ? {} : { [title]: true };
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSubmenus({});
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenSubmenus({});
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-transform">
            <BookOpen className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">আল-মা'আরিফ</span>
              <span className="text-xs text-muted-foreground">
                ইন্টারন্যাশনাল ইনস্টিটিউট
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-3 items-center">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <div className="flex items-center h-10">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`flex items-center h-full px-4 text-md font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center h-full px-4 text-md font-medium hover:text-primary transition-colors focus:outline-none"
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                          openSubmenus[item.title] ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {item.children && (
                  <ul
                    className={`absolute left-0 top-full z-50 w-60 flex-col gap-1 rounded-md border bg-card p-2 shadow-lg transition-all duration-300 origin-top ${
                      openSubmenus[item.title]
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    {item.children.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path!}
                          className="block px-3 py-2 rounded-md text-md hover:bg-secondary hover:text-secondary-foreground transition-colors"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="secondary"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.title} className="flex flex-col">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-md font-medium rounded-md hover:bg-secondary transition-colors ${
                        location.pathname === item.path ? "text-primary" : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="flex w-full items-center justify-between px-4 py-2 text-md font-medium hover:bg-secondary rounded-md transition-colors"
                        onClick={() => toggleSubmenu(item.title)}
                      >
                        {item.title}
                        <ChevronDown
                          className={`ml-2 h-4 w-4 transform transition-transform duration-300 ${
                            openSubmenus[item.title] ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      {item.children && (
                        <div
                          className={`flex flex-col pl-6 overflow-hidden transition-all duration-300 ${
                            openSubmenus[item.title]
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {item.children.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path!}
                              className="px-4 py-2 text-md font-medium hover:bg-secondary rounded-md transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
