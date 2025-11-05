import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan las variables de entorno de Supabase');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Channel {
  id: string;
  name: string;
  created_at: string;
}

export interface Message {
  id: string;
  channel_id: string;
  username: string;
  message: string;
  created_at: string;
}

export interface ChannelUser {
  id: string;
  channel_id: string;
  username: string;
  joined_at: string;
}

