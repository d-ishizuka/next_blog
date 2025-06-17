import { siteMeta } from "@/lib/constants";
const { siteTitle, siteDesc, siteUrl, siteLang, siteLocale, siteType, siteIcon } = siteMeta;

export default function Meta({ pageTitle, pageDesc }) {
    return {
        title: pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle,
        description: pageDesc ?? siteDesc,
        openGraph: {
            title: pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle,
            description: pageDesc ? pageDesc : siteDesc,
            siteName: siteTitle,
            type: siteType,
        }
    }
}