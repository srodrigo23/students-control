import os
from supabase import create_client, Client

url: str = os.environ.get("DATABASE_URL")
key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase: Client = create_client(supabase_url=url, supabase_key=key)


response = supabase.table('countries').select("*").execute()


