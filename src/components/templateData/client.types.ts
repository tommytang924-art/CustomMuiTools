// client.types.ts
export interface Client {
  id: string;                    // UUID or internal ID
  clientCode: string;            // e.g. "C2024-0789", "VIP-1241"
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;    // ISO date string "YYYY-MM-DD"
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  address: string;
}


export const clients: Client[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    clientCode: "C2024-0789",
    fullName: "Chan Wing Hin",
    email: "winghin.chan@gmail.com",
    phone: "+852 9123 4567",
    dateOfBirth: "1992-03-18",
    gender: "male",
    address: "Flat 12A, Tower 3, Harbour View Gardens, Sai Wan Ho, Hong Kong"
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    clientCode: "VIP-1241",
    fullName: "Wong Mei Ling",
    email: "meiling.wong@yahoo.com.hk",
    phone: "+852 9876 5432",
    dateOfBirth: "1987-11-05",
    gender: "female",
    address: "Room 1502, Block B, Metro City, Tseung Kwan O"
  },
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    clientCode: "C2025-0123",
    fullName: "Lee Ka Po",
    email: "kapo.lee@icloud.com",
    phone: "+852 6333 2211",
    dateOfBirth: "1999-07-22",
    gender: "female",
    address: "Shop G08, G/F, Lucky Plaza, Causeway Bay"
  },
  {
    id: "987fcdeb-1234-5678-9abc-def012345678",
    clientCode: "MEM-5567",
    fullName: " Cheung Tai Man",
    email: "taiman.cheung@outlook.com",
    phone: "+852 6333 2211",
    dateOfBirth: "1978-12-03",
    gender: "male",
    address: "Villa 28, Phase 3, The Beverly Hills, Tseung Kwan O"
  },
  {
    id: "3f2504e0-4f89-41d3-9a0c-0305e82c3301",
    clientCode: "C2024-1456",
    fullName: "Lam Siu Ying",
    email: "siuying.lam123@gmail.com",
    phone: "+852 5111 8888",
    dateOfBirth: "1978-12-03",
    gender: "prefer_not_to_say",
    address: "Flat D, 28/F, Block 2, Laguna Verde, Hung Hom"
  },
  {
    id: "d4e5f678-90ab-cdef-1234-567890abcdef",
    clientCode: "VIP-2389",
    fullName: "Ng Tsz Ho",
    email: "tszho.ng@proton.me",
    phone: "+852 9222 3344",
    dateOfBirth: "1995-04-30",
    gender: "male",
    address: "Unit 6B, 16/F, Tower 5, The Hermitage, Ho Man Tin"
  },
  {
    id: "11111111-2222-3333-4444-555555555555",
    clientCode: "C2025-0098",
    fullName: "Ho Pui Shan",
    email: "puishan.ho@hotmail.com",
    phone: "+852 9222 3344",
    dateOfBirth: "2001-09-14",
    gender: "female",
    address: "Room 1203, Sun Tuen Mun Centre, Tuen Mun"
  },
  {
    id: "22222222-3333-4444-5555-666666666666",
    clientCode: "PREM-7771",
    fullName: "Yip Chun Kit",
    email: "chunkit.yip.work@gmail.com",
    phone: "+852 6888 9900",
    dateOfBirth: "1984-06-08",
    gender: "male",
    address: "House 12, Royal Palms, Clear Water Bay"
  },
  {
    id: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    clientCode: "C2024-3210",
    fullName: "Mak Hoi Yan",
    email: "hoiyan.mak@yahoo.com.hk",
    phone: "+852 9444 1122",
    dateOfBirth: "1990-01-27",
    gender: "female",
    address: "Flat A3, 9/F, Po Sing Centre, Kwun Tong"
  },
  {
    id: "bbbbbbbb-cccc-dddd-eeee-ffffffffffff",
    clientCode: "MEM-8890",
    fullName: "Fung Wai Lun",
    email: "wailun.fung@live.com",
    phone: "+852 9222 3344",
    dateOfBirth:"1990-01-27",
    gender: "female",
    address: "G/F, 88 Des Voeux Road West, Shek Tong Tsui, Hong Kong"
  }
];