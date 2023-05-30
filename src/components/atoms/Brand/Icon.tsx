const Logo = (props: {
    fill?: string
    width?: string | number
    height?: string | number
    viewbox?: string
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={props.viewbox ?? '0 0 34.94 36.89'}
        {...props}
    >
        <title>{'logo-grooploop'}</title>
        <g id="Capa_2" data-name="Capa 2">
            <g id="Capa_1-2" data-name="Capa 1">
                <path
                    fill={props.fill ?? '#38b8cb'}
                    d="M16.69 3.81c9.55 0 17 7.17 17.09 16.46 0 9.1-7.69 16.65-17 16.62a16.54 16.54 0 1 1-.07-33.08ZM17 32a12 12 0 0 0 11.78-11.72A11.74 11.74 0 0 0 16.46 8.72 11.6 11.6 0 0 0 5 20.59 11.72 11.72 0 0 0 17 32ZM34.94 3c-.19 2-1.26 3.06-3.21 3a2.7 2.7 0 0 1-2.83-2.8A2.75 2.75 0 0 1 31.8 0c1.97 0 2.95 1.13 3.14 3Z"
                />
            </g>
        </g>
    </svg>
)

export default Logo
