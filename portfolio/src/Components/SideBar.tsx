import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, useMatches } from '@mantine/core';
import { navLinks } from './Header';

// SideBar component definition
const SideBar=()=> {
  // useDisclosure hook to manage drawer open/close state
  const [opened, { toggle }] = useDisclosure(false);
  // Responsive burger size using useMatches hook
  const size=useMatches({
   xs:'md',
   sm:'lg'
});

  // Render sidebar drawer and burger menu for mobile navigation
  return (
    <>
      {/* Drawer for navigation links, hidden on large screens */}
      <Drawer.Root  className='bs:hidden !-z-10'  position='right' opened={opened}   onClose={toggle} size="50vw" >
        {/* Drawer overlay with blur effect */}
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm' />
        {/* Drawer content with background color */}
        <Drawer.Content className='!-z-0' bg="#112240">
          {/* Drawer body with navigation links */}
          <Drawer.Body className='mt-20 xs:mt-24  flex flex-col gap-5' bg="#112240">
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {/* Burger menu button for opening/closing drawer */}
      <Burger className='bs:!hidden !z-50 relative' size={size} color='#64FFDA' opened={opened} onClick={toggle}  />
    </>
  );
}
// Exporting SideBar component as default
export default SideBar;