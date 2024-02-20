
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ynujfgdttpkpwnimpngy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InludWpmZ2R0dHBrcHduaW1wbmd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzc4ODEwNCwiZXhwIjoyMDIzMzY0MTA0fQ.JudOU8JsM7NJJj2R-Ar09ttnzb50E6agZ_YcU7tRIdE"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;