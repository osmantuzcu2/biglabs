import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <li>
          <Link href="https://bigint.co">Nft Marketplace</Link>
        </li>
        <li>
          <Link href="https://landing.bigint.co/handle">
            Web3 Domain system
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
