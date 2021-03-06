import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import PhounderPagePreview from "./preview-templates/PhounderPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import EventsPagePreview from "./preview-templates/EventsPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("phounders", PhounderPagePreview);
CMS.registerPreviewTemplate("events", EventsPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
