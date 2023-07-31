import React, { useState, lazy, Suspense } from "react";
import SideMenu from "./SideMenu";
import { useOrderContext } from "../../utils/OrderContext";
import profile from "/src/assets/theme1/icons/dashboard/profile.svg";
import location from "/src/assets/theme1/icons/dashboard/location.svg";
import orders from "/src/assets/theme1/icons/dashboard/orders.svg";
import cards from "/src/assets/theme1/icons/dashboard/cards.svg";
import favourite from "/src/assets/theme1/icons/dashboard/favourite.svg";

const Container: React.FC = () => {
  const { isMenuOpen } = useOrderContext();

  const [active, setActive] = useState(1);
  const options = [
    {
      id: 1,
      name: "Account Info",
      icon: profile,
    },
    {
      id: 2,
      name: "Saved Address",
      icon: location,
    },
    {
      id: 3,
      name: "My Orders",
      icon: orders,
    },
    {
      id: 4,
      name: "Saved Cards",
      icon: cards,
    },
    {
      id: 5,
      name: "My Wishlist",
      icon: favourite,
    },
  ];
  const handleActive = (id: number) => {
    setActive(id);
  };

  const loadComponent = (id: number) => {
    switch (id) {
      case 1:
        return lazy(() => import("./AccountInfo"));
      case 2:
        return lazy(() => import("./SavedAddress"));
      case 3:
        return lazy(() => import("./MyOrders"));
      //   case 4:
      //     return lazy(() => import('./SavedCards'));
      case 5:
        return lazy(() => import("./MyWishlist"));
      default:
        return null;
    }
  };

  const ActiveComponent = loadComponent(active);
  return (
    <div className="container mx-auto md:my-10">
      <div className="flex md:flex-row flex-col justify-between gap-6 items-start">
        <div className={`md:w-3/12  ${!isMenuOpen && "hidden"}`}>
          <SideMenu
            active={active}
            onHandleActive={handleActive}
            options={options}
          />
        </div>
        <div className="md:w-9/12 w-full">
          <Suspense fallback={<div></div>}>
            {ActiveComponent && (
              <div className="rounded-2xl p-4 md:p-8 cartShadow h-full">
                <ActiveComponent />
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Container;
