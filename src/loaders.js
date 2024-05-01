const URL = process.env.REACT_APP_URL;

export const menuLoader = async () => {
    const response = await fetch(`${URL}menu`);
    const menu = await response.json();
    return menu;
  };

  export const menu2Loader = async () => {
    const response = await fetch(`${URL}menu/`);
    const menu = await response.json();
    return menu;
  };

  export const menusLoader = async ({ params }) => {
    const response = await fetch(`${URL}menu/${params.id}`);
    const menus = await response.json(); 
    return menus;
  };
  