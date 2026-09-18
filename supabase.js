import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xyzcompany.supabase.co';
const supabaseAnonKey = 'paste-your-anon-key-here';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Save if phone lost - cloud holds it!
export async function saveContact(name, phone) {
  const { data, error } = await supabase.from('contacts').insert([{ name, phone }]);
  return { data, error };
}

export async function saveSOS(location) {
  const { data, error } = await supabase.from('sos_logs').insert([{ location, time: new Date() }]);
  return { data, error };
}
