import Link from "next/link";

interface IFooterButton {
  text: string;
  link: string;
}

export default function FooterButtonsSection({
  tittle,
  buttons,
}: {
  tittle: string;
  buttons: IFooterButton[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-black border-b-[1px] border-white py-1 pr-6 border-opacity-30">
        {tittle}
      </h2>
      <ul className="flex flex-col gap-2" aria-label={`${tittle} links`}>
        {buttons.map((data, index) => {
          return (
            <li key={index} className="text-sm font-semibold text-neutral-400 ">
              <Link
                className="hover:text-purple-400 transition-all ease-linear duration-200"
                href={data.link}
                aria-label={`${data.text} link`}
              >
                {data.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
