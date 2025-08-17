<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Payment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Reservation;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $reservations = Reservation::factory(60)->create();
        Payment::factory(30)->hasAttached($reservations)->create();
        $fake_users = [
            [
                'name' => 'Rick Sanchez',
                'email' => 'rick@admin.com',
                "password" => "12345678",
                "role" => "admin",
                "profile_picture_path" => "avatars/rick.jpg"
            ],
            [
                'name' => 'Morty Sanchez',
                'email' => 'morty@admin.com',
                "password" => "12345678",
                "role" => "regular",
            ],
        ];
        foreach ($fake_users as $user) {
            User::factory()->create($user);
        }
        $this->call(RoomSeeder::class);
        $this->call(FeatureSeeder::class);
        $this->call(FeatureRoomSeeder::class);
        // $this->call(ReservationSeeder::class);
    }
}
