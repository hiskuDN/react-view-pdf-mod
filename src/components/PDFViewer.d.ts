import * as React from 'react';
import { PageViewMode } from '../types/Page';
import PdfJs from '../utils/PdfJs';
import { ToolbarLabelProps } from './PDFViewerToolbar';
export interface PDFViewerProps {
    /**
     * URL to the file to be loaded
     */
    url?: string;
    /**
     * Service workser URL
     */
    workerUrl?: string;
    /**
     * Function event triggered when a document fully loads successfully
     *
     * @param document
     */
    onLoadSuccess?(document: PdfJs.PdfDocument): void;
    /**
     * Function event triggered when a document fails to load
     *
     * @param error
     */
    onLoadError?(error: unknown): void;
    /**
     * Function event triggered when the current page changes
     *
     * @param currentPage
     * @param totalPages
     */
    onPageChanged?(currentPage: number, totalPages: number): void;
    /**
     * Optional object containing all labels used in the toolbar, in case localization is needed.
     */
    toolbarLabels?: ToolbarLabelProps;
    /**
     * Disable text selection for rendered pages
     */
    disableSelect?: boolean;
    /**
     * Default page view mode
     */
    defaultPageViewMode?: PageViewMode;
}
/**
 * The `Document` is a wrapper to load PDFs and render all the pages
 */
export declare const PDFViewer: React.FC<PDFViewerProps>;
