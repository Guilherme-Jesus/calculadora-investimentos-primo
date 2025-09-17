import { Skeleton } from './skeleton'

export function CalculatorLoading() {
  return (
    <div className="w-full mx-auto px-6 sm:px-8 lg:px-30 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-14">
        <div className="space-y-6 sm:space-y-24 lg:flex-1 lg:max-w-2xl">
          <div className="space-y-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-52" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-56" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
        <div className="space-y-6 sm:space-y-8 lg:flex-1 lg:max-w-2xl">
          <Skeleton className="h-8 w-64" />
          <div className="space-y-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
