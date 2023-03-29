function MenuLink({link, data}) {
    return (
        <li class="list-group-item list-group-item-primary">
            <a class="dropdown-item " href={link}>{data}</a>
        </li>
    );
}

export default MenuLink;