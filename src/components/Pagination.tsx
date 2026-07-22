"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

type Props = {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({ totalPages, currentPage, onPageChange }: Props) {
    const goToFirst = () => onPageChange(1);
    const goToLast = () => onPageChange(totalPages);
    const goToPrev = () => onPageChange(Math.max(1, currentPage - 1));
    const goToNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center gap-6 text-gray-500">
            <button
                onClick={goToFirst}
                disabled={currentPage === 1}
                className="disabled:opacity-30 hover:text-[#C48F7F] transition-colors"
                aria-label="First page"
            >
                <ChevronsLeft size={20} />
            </button>

            <button
                onClick={goToPrev}
                disabled={currentPage === 1}
                className="disabled:opacity-30 hover:text-[#C48F7F] transition-colors"
                aria-label="Previous page"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-1 text-[15px]">
                <span>Page</span>
                {pages.map((page) => (
                    <span key={page} className="flex items-center">
                        <button
                            onClick={() => onPageChange(page)}
                            className={
                                page === currentPage
                                    ? "font-bold text-[#222D43]"
                                    : "hover:text-[#C48F7F] transition-colors"
                            }
                        >
                            {page}
                        </button>
                        {page !== totalPages && <span>,</span>}
                    </span>
                ))}
                {totalPages > 5 && <span>......</span>}
            </div>

            <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="disabled:opacity-30 hover:text-[#C48F7F] transition-colors"
                aria-label="Next page"
            >
                <ChevronRight size={20} />
            </button>

            <button
                onClick={goToLast}
                disabled={currentPage === totalPages}
                className="disabled:opacity-30 hover:text-[#C48F7F] transition-colors"
                aria-label="Last page"
            >
                <ChevronsRight size={20} />
            </button>
        </div>
    );
}