import { CirclePower, Home, Rss } from 'lucide-react';

import {
  HeaderStyled,
  Sidebar,
  SidebarItem,
  Title,
} from './Header.styled';

type HeaderProps = {
  showPosts?: boolean;
  title?: string;
};

export function Header({ showPosts = false, title = 'React Seed' }: HeaderProps) {
  return (
    <HeaderStyled>
      <Title to="/"><Home /> {title}</Title>

      <Sidebar>
        {showPosts && (
          <SidebarItem
            aria-label="to posts"
            to="/posts"
          >
            <Rss />
          </SidebarItem>
        )}

        <SidebarItem
          aria-label="to posts"
          onClick={window.stopMock}
        >
          <CirclePower />
        </SidebarItem>
      </Sidebar>
    </HeaderStyled>
  );
}
