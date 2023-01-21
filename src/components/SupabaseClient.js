
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://qttgkmypdeunxddqrdli.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0dGdrbXlwZGV1bnhkZHFyZGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3NTIyNzksImV4cCI6MTk4OTMyODI3OX0.d-hE86DM4K_-X9aFbgNzsdH1nBmm8pcgdWZ5aGK0Oq4'
)