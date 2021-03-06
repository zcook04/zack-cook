import React from 'react'
import Link from 'next/link'

function Linkedin(props) {
    return (
        <Link href="https://www.linkedin.com/in/zachary-cook-1a87881b2/" passHref>
        <svg className={props.className} height={props.height} viewBox="0 0 64 64" width={props.width} xmlns="http://www.w3.org/2000/svg"><g id="Icons" fillRule="evenodd"><g id="Social-Media-Collection" transform="translate(-463 -198)"><g id="Linkedin" transform="translate(463 198)"><path id="Fill-209" d="m48 47.97h-6.63v-10.376c0-2.474-.044-5.656-3.446-5.656-3.45 0-3.976 2.696-3.976 5.48v10.552h-6.624v-21.336h6.356v2.918h.092c.884-1.678 3.048-3.448 6.274-3.448 6.714 0 7.954 4.418 7.954 10.164zm-28.152-24.25c-2.13 0-3.848-1.724-3.848-3.846s1.718-3.846 3.848-3.846c2.12 0 3.842 1.724 3.842 3.846s-1.722 3.846-3.842 3.846zm3.316 24.25h-6.638v-21.336h6.638zm8.836-47.97c-17.674 0-32 14.326-32 32 0 17.672 14.326 32 32 32s32-14.328 32-32c0-17.674-14.326-32-32-32z"/></g></g></g></svg>
        </Link>
    )
}

export default Linkedin
