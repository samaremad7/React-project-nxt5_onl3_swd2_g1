import './TheHeader.css'

function TheHeader({ headerlink }) {
    return (
        <header>
            <nav>
                <ul>
                    {headerlink.map(({ title, path }) =>
                        <li key={title} >
                            <a href={path}>{title}</a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default TheHeader;