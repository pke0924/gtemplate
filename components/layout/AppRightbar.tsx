"use client";
interface tocP {
  level: string;
  text: string;
  slug: string;
}

const AppRightbar = ({ menu, pageUrl }: { menu: tocP[]; pageUrl: string }) => {
  // const { menu, pageUrl } = props;
  // console.log("==============right");
  // console.log(menu);
  // console.log(pageUrl);
  if (!menu) {
    return <></>;
  }
  // const model  = menu;
  return (
    <div>
      <p>On this page</p>
      <div className="markdown-body">
      {menu.map((heading) => {
            const levelNumber = heading.level === 'one' ? 1 : heading.level === 'two' ? 2 : heading.level === 'three' ? 3 : heading.level === 'four' ? 4 : 0;
            const listItemStyle = `pl-${levelNumber * 1}`;
            return (
              <div key={`#${heading.slug}`} data-level={heading.level} className={listItemStyle}>
                <a data-level={heading.level} href={`${pageUrl}#${heading.slug}`}>
                  {heading.text}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AppRightbar;
