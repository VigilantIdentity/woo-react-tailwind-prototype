import useAuth from "../hooks/useAuth";

export default function Language() {
  const { languageList, setSelectedLanguage, setIsVerticalOpen } = useAuth();

  return languageList.map((lan) => (
    <li
      id={lan.id}
      onClick={() => {
        setSelectedLanguage([lan.label]);
        setIsVerticalOpen(false);
      }}
      key={lan.id}
      className="flex px-6 gap-2 h-14 cursor-pointer justify-items-start items-center border rounded-md hover:text-blue-500"
    >
      {lan.label}
    </li>
  ));
}
