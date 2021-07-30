import Link from 'next/link'

function Facebook(props) {
   return (
    <Link href="https://www.facebook.com/zachary.cook.3576" passHref>
        <svg id="fb-icon" height={props.height} viewBox="0 0 64 64" width={props.width} xmlns="http://www.w3.org/2000/svg"><g id="Icons" fillRule="evenodd"><g id="Social-Media-Collection" transform="translate(-107 -87)"><g id="Facebook" transform="translate(107 87)"><path id="Fill-183" d="m40.31 21.312-3.012.002c-2.362 0-2.82 1.122-2.82 2.768v3.632h5.634l-.734 5.69h-4.9v14.596h-5.874v-14.596h-4.912v-5.69h4.912v-4.194c0-4.87 2.974-7.52 7.316-7.52 2.08 0 3.868.154 4.39.224zm-8.31-21.312c-17.672 0-32 14.326-32 32 0 17.672 14.328 32 32 32 17.674 0 32-14.328 32-32 0-17.674-14.326-32-32-32z"/></g></g></g></svg>
    </Link>
    )
}

export default Facebook
