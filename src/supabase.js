import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://prfpblvetkmcpdyfvixf.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.       eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZnBibHZldGttY3BkeWZ2aXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMzc2MDQsImV4cCI6MjAxMjYxMzYwNH0.o4cZjJhSjR5r1pBOvybMwBbiBcxxQ94G2rpokHYRtJQ

export const supabase = createClient(supabaseUrl, supabaseKey)