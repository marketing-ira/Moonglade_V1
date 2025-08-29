interface NavbarLinkType {
    label: string;
    url: string;
}


const NavLinks : NavbarLinkType[] = [
    {
        label: "Home",
        url: "/",
    },
    {
        label:"Clubhouse",
        url:"#clubhouse",
    },
    {
        label:"Amenities",
        url:"#amenities",
    },
    {
        label:"Plans",
        url:"#plans",
    },
    {
        label: "Our Projects",
        url: "#our-projects",
    },
]

export { NavLinks  };