import Link from 'next/link'

function Youtube(props) {
    return (
        <Link href="https://www.youtube.com/channel/UClpKWInilzSs-aauOkje_lQ" passHref>
        <svg className={props.className} height={props.height} viewBox="0 0 64 64" width={props.width} xmlns="http://www.w3.org/2000/svg"><g id="Icons" fillRule="evenodd"><g id="Social-Media-Collection" transform="translate(-341 -190)"><g id="Youtube" transform="translate(341 190)"><g id="Fill-314"><path id="Fill-207" d="m48 33.208c0 2.59-.32 5.18-.32 5.18s-.312 2.204-1.272 3.176c-1.216 1.274-2.58 1.28-3.206 1.354-4.478.324-11.202.334-11.202.334s-8.32-.076-10.88-.32c-.712-.134-2.312-.094-3.528-1.368-.96-.972-1.272-3.176-1.272-3.176s-.32-2.59-.32-5.18v-2.428c0-2.59.32-5.178.32-5.178s.312-2.206 1.272-3.178c1.216-1.274 2.58-1.28 3.206-1.354 4.478-.324 11.196-.324 11.196-.324h.012s6.718 0 11.196.324c.626.074 1.99.08 3.206 1.354.96.972 1.272 3.178 1.272 3.178s.32 2.588.32 5.178zm-16-33.208c-17.674 0-32 14.326-32 32 0 17.672 14.326 32 32 32s32-14.328 32-32c0-17.674-14.326-32-32-32z"/></g><path id="Fill-208" d="m28.6964 36.15 8.646-4.48-8.648-4.512z"/></g></g></g></svg>
        </Link>
    )
}

export default Youtube
