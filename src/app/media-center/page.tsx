import FirstSection from "./section/FirstSection";
import GalleryPage from "./section/Gallery";
import PDFAsset from "./section/PDFAsset";
import VideoSlider from "./section/Video";

export default function MediaCenter() {
    return (
        <>
            <FirstSection />
            <GalleryPage />
            <VideoSlider />
            <PDFAsset />
        </>
    );
}