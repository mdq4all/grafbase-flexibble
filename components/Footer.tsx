import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  interface indexProps {
    index: number;
  }
  const FooterColumn = ({ index }: indexProps) => (
    <div className="footer_column">
      <h4 className="font-semibold">{footerLinks[index].title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {footerLinks[index].links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="logo-purple.svg"
            width={115}
            height={38}
            alt="Flexibble"
            className="w-auto"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for creatives to share,
            grow, and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn index={0} />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn index={1} />
            <FooterColumn index={2} />
          </div>
            <FooterColumn index={3} />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn index={4} />
            <FooterColumn index={5} />
          </div>
            <FooterColumn index={6} />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray">
            <span className="text-black font-semibold">10.214</span> projects submitted
        </p>
      </div>
    </footer>
  );
}
