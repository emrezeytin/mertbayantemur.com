export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          created_at: string | null
          id: number
          key: string | null
          link: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          key?: string | null
          link?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          key?: string | null
          link?: string | null
          title?: string | null
        }
      }
      socials: {
        Row: {
          created_at: string | null
          id: number
          key: string | null
          link: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          key?: string | null
          link?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          key?: string | null
          link?: string | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export interface Link {
    created_at: string | null
    id: number
    key: string | null
    link: string | null
    title: string | null
}
