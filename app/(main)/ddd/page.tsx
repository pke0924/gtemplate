import Link from "next/link";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      ## Tailwind Table
      <div className="columns-2 hover:columns-4">
        <div className="box-border h-32 w-32 p-4 border-4"> aaa </div>
        <div className="box-content h-32 w-32 p-4 border-4 midnight "> bb </div>
        <div className="box-content h-32 w-32 p-4 border-4 bg-red">ccc</div>
      </div>
      <h4>Tailwind Table 2</h4>
      <div className="tw-table tw-border-collapse tw-table-auto tw-w-full tw-text-sm ">
        <div className="tw-table-header-group">
          <div className="tw-table-row">
            <div
              className="tw-table-cell tw-text-lefttable-cell tw-border-b dark:tw-border-slate-600 tw-font-medium 
            tw-p-4 tw-pl-8 tw-pt-0 tw-pb-3 tw-text-slate-400 dark:tw-text-slate-200 tw-text-left "
            >
              Song
            </div>
            <div
              className="tw-table-cell tw-text-lefttable-cell tw-border-b dark:tw-border-slate-600 tw-font-medium 
            tw-p-4 tw-pl-8 tw-pt-0 tw-pb-3 tw-text-slate-400 dark:tw-text-slate-200 tw-text-left "
            >
              Artist
            </div>
            <div
              className="tw-table-cell tw-text-lefttable-cell tw-border-b dark:tw-border-slate-600 tw-font-medium 
            tw-p-4 tw-pl-8 tw-pt-0 tw-pb-3 tw-text-slate-400 dark:tw-text-slate-200 tw-text-left "
            >
              Year
            </div>
          </div>
        </div>

        <div className="tw-table-row-group tw-bg-white dark:tw-bg-slate-400">
          <div className="tw-table-row tw-row-span-full">
            <div className="tw-table-cell ">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </div>
            <div className="tw-table-cell ">Malcolm Lockyer</div>
            <div className="tw-table-cell ">1961</div>
          </div>
          <div className="tw-table-row">
            <div className="tw-table-cell ">Witchy Woman</div>
            <div className="tw-table-cell ">The Eagles</div>
            <div className="tw-table-cell ">1972</div>
          </div>

          <div className="tw-table-row">
            <div className="tw-table-cell ">Witchy Woman</div>
            <div className="tw-table-cell ">The Eagles</div>
            <div className="tw-table-cell ">1972</div>
          </div>

          <div className="table-row">
            <div className="tw-table-cell ">Witchy Woman</div>
            <div className="tw-table-cell ">The Eagles</div>
            <div className="tw-table-cell ">1972</div>
          </div>

          <div className="tw-table-row">
            <div className="tw-table-cell ">Shining Star</div>
            <div className="tw-table-cell ">Earth, Wind, and Fire</div>
            <div className="tw-table-cell ">1975</div>
          </div>
        </div>
      </div>
      <div className="tw-place-content-center tw-text-center  tw-text-sm tw-my-2">
        Table 3.1: Professional wrestlers and their signature moves.
      </div>
      <h4>Tailwind Grid 1</h4>
      <div className="tw-grid tw-grid-cols-3 tw-gap-px tw-min-w-min tw-place-content-center  tw-bg-gray-200 tw-p-px tw-text-sm tw-mx-auto">
        <div className="tw-row-span-2 tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid tw-place-content-center tw-text-center  tw-font-bold">
          Song
        </div>
        <div className="tw-hidden tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid tw-place-content-center tw-text-center tw-font-bold">
          Song
        </div>
        <div className="tw-col-span-2 tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid  tw-place-content-center tw-text-center tw-font-bold">
          AAA
        </div>
        {/* row */}
        <div className="tw-hidden tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid tw-place-content-center tw-text-center">
          qqq
        </div>
        <div className="tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid  tw-place-content-center tw-text-center tw-font-bold">
          AAA
        </div>
        <div className="tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid  tw-place-content-center tw-text-center tw-font-bold">
          한글
        </div>

        <div className="tw-grid tw-bg-slate-100  tw-row-span-2 tw-bg-white tw-p-1 tw-grid  tw-place-content-center tw-text-center">
          <div className="tw-mx-2">
            p-4 rounded-lg shadow-lg bg-fuchsia -500 grid place-content-center
            row-span-3
          </div>
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          2
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          3
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center ">
          1
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          2
        </div>
        <div className="tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-grid tw-place-content-center tw-text-center">
          zzsdfasd
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          3
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          1
        </div>
        <div className="tw-col-span-2 tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-place-content-center tw-text-center">
          합계
        </div>
        <div className="tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-place-content-center tw-text-center">
          2
        </div>
        <div className="tw-col-span-3 tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-place-content-center tw-text-center">
          합계
        </div>
      </div>
      <br />
      <h4>Tailwind Grid 2</h4>
      <div className="tw-grid tw-grid-cols-[1fr 1fr 1fr] 100px tw-gap-px tw-min-w-min tw-place-content-center  tw-bg-gray-200 tw-p-px tw-text-sm tw-mx-auto">
        <div className="tw-row-span-2 tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid tw-place-content-center tw-text-center  tw-font-bold">
          Song
        </div>
        <div className="tw-hidden tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid tw-place-content-center tw-text-center tw-font-bold">
          Song
        </div>

        <div className="tw-col-span-2 tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid  tw-place-content-center tw-text-center tw-font-bold">
          AAA
        </div>
        {/* row */}
        <div className="tw-hidden tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid tw-place-content-center tw-text-center">
          qqq
        </div>
        <div className="tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid  tw-place-content-center tw-text-center tw-font-bold">
          AAA
        </div>
        <div className="tw-bg-slate-100 tw-py-1 tw-px-2 tw-grid  tw-place-content-center tw-text-center tw-font-bold">
          한글
        </div>

        <div className="tw-grid tw-bg-slate-100  tw-row-span-2 tw-bg-white tw-p-1 tw-grid  tw-place-content-center tw-text-center">
          <div className="tw-mx-2">
            p-4 rounded-lg shadow-lg bg-fuchsia -500 grid place-content-center
            row-span-3
          </div>
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          2
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          3
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center ">
          1
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          2
        </div>

        <div className="tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-grid tw-place-content-center tw-text-center">
          zzsdfasd
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          3
        </div>
        <div className="tw-bg-white tw-p-1 tw-grid tw-place-content-center tw-text-center">
          1
        </div>

        <div className="tw-col-span-2 tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-place-content-center tw-text-center">
          합계
        </div>

        <div className="tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-place-content-center tw-text-center">
          2
        </div>

        <div className="tw-col-span-3 tw-bg-slate-100 tw-min-w-fit tw-p-1 tw-place-content-center tw-text-center">
          합계
        </div>
      </div>
    </>
  );
}
