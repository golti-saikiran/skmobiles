import * as React from "react";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { useBoolean } from "@fluentui/react-hooks";
import { mergeStyles, mergeStyleSets } from "@fluentui/react/lib/Styling";
import { FontIcon } from "@fluentui/react/lib/Icon";
import Cart from "./Cart";
import { useAppSelector } from "../ReduxFeatures/reduxhooks"


export const CartPanel: React.FunctionComponent = () => {
 
  const data = useAppSelector((state) => state.Cart);
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  const iconClass = mergeStyles({
    fontSize: 30,
    height: 30,
    width: 30,
    margin: "0 25px",
  });
  const classNames = mergeStyleSets({
    deepSkyBlue: [{ color: "black" }, iconClass],
  });


  return (
    <div>
      <div className="cart-bag">
        <button className="cart-button" onClick={openPanel}>
          <FontIcon
            aria-label="shoppingcart"
            iconName="ShoppingCartSolid"
            className={classNames.deepSkyBlue}
          />
        </button>
        <span className="cart-quantity">
          <span>{data.totalCartItems}</span>
        </span>
      </div>
      <Panel
        headerText={`My cart (Items:${data.totalCartItems}) `}
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
        customWidth={undefined}
        type={PanelType.medium}
      >
        <Cart />
      </Panel>
    </div>
  );
};
