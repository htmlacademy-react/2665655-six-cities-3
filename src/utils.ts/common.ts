const REVIEW_DATA_FORMAT = {
  month: 'long',
  year: 'numeric'
} as const;

export function formatReviewDate (date: string){
  return new Date(date).toLocaleDateString('en-US', REVIEW_DATA_FORMAT);
}
