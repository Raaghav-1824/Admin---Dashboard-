// src/components/OptimizedStatCard.tsx
import React, { memo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { TrendingUp, TrendingDown } from 'lucide-react'

const statCardVariants = cva(
  'rounded-lg border transition-all duration-250 ease-smooth shadow-card',
  {
    variants: {
      variant: {
        lightBlue: 'bg-brand-light-blue border-brand-light-blue hover:shadow-card-hover',
        main: 'bg-brand-main border-brand-main hover:shadow-card-hover',
        grayBlue: 'bg-brand-gray-blue border-brand-gray-blue hover:shadow-card-hover',
      },
      size: {
        default: 'p-6',
      },
    },
    defaultVariants: {
      variant: 'main',
      size: 'default',
    },
  }
)

const deltaVariants = cva(
  'inline-flex items-center gap-1 text-xs font-medium transition-colors duration-200',
  {
    variants: {
      variant: {
        positive: 'text-green-600',
        negative: 'text-gray-600',
        neutral: 'text-gray-600',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
)

interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string
  value: string | number
  delta?: string
  deltaType?: 'positive' | 'negative' | 'neutral'
  className?: string
}

export const OptimizedStatCard = memo<StatCardProps>(({
  title,
  value,
  delta,
  deltaType = 'neutral',
  variant,
  size,
  className,
}) => {
  const getDeltaType = (deltaValue?: string): 'positive' | 'negative' | 'neutral' => {
    if (!deltaValue) return 'neutral'
    return deltaValue.startsWith('+') ? 'positive' : deltaValue.startsWith('-') ? 'negative' : 'neutral'
  }

  const finalDeltaType = deltaType === 'neutral' ? getDeltaType(delta) : deltaType

  return (
    <div className={cn(statCardVariants({ variant, size }), className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline justify-between">
          <div className="text-3xl font-bold text-gray-900">
            {value}
          </div>
          
          {delta && (
            <div className={cn(deltaVariants({ variant: finalDeltaType }))}>
              {finalDeltaType === 'positive' && <TrendingUp className="w-3 h-3" />}
              {finalDeltaType === 'negative' && <TrendingDown className="w-3 h-3" />}
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '12px',
                  lineHeight: '18px',
                  letterSpacing: '0%',
                }}
              >
                {delta}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

OptimizedStatCard.displayName = 'OptimizedStatCard'