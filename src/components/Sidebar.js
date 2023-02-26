import Link from './ui/Link';

const Sidebar = () => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
  ];

  const renderedLinks = links.map(link => (
    <Link key={link.label} to={link.path}>
      {link.label}
    </Link>
  ));
  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
