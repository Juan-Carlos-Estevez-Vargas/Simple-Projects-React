import { useEffect } from "react";
import MainContainer from "../components/mainContainer/mainContainer";
import CreateForm from "../components/createForm/createForm";
import ItemsContainer from "../components/itemsContainer/itemsContainer";
import Item from "../components/item/item";

import useReducerApp from "../store/store";

export default function Create() {
  const [state, dispatch] = useReducerApp();

  console.log("state", state);
  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  return (
    <MainContainer>
      <CreateForm dispatch={dispatch} />
      <ItemsContainer>
        {state?.items.map((item) => (
          <Item key={crypto.randomUUID()} item={item} />
        ))}
      </ItemsContainer>
    </MainContainer>
  );
}
