import useAuth from "../hooks/useAuth";
export default function Currency() {
  const { setIsVerticalOpen, currencyList, setSelectedCurrency } = useAuth();
  return currencyList.map((cur) => {
    //✅ Render currency list over drawer menu
    return (
      <li
        id={cur.id}
        onClick={() => {
          setSelectedCurrency([cur.icon, cur.currency]);
          setIsVerticalOpen(false);
        }}
        key={cur.id}
        className="flex px-6 gap-2 h-14 cursor-pointer justify-items-start items-center border rounded-md hover:text-blue-500"
      >
        {cur.icon}
        {cur.currency}
      </li>
    );
  });
}
