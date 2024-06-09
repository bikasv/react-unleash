import { Home, Rss } from 'lucide-react';

import {
  HeaderStyled,
  Sidebar,
  SidebarItem,
  Title,
} from './Header.styled';

type HeaderProps = {
  showSidebar?: boolean;
  title?: string;
};

export function Header({ showSidebar = false, title = 'React Seed' }: HeaderProps) {
  return (
    <HeaderStyled>
      <Title to="/"><Home /> {title}</Title>

      {showSidebar && (
        <Sidebar>
          <SidebarItem
            aria-label="to posts"
            to="/posts"
          >
            <Rss />
          </SidebarItem>
        </Sidebar>
      )}
    </HeaderStyled>
  );
}
