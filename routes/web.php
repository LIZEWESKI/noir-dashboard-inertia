<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Http\RedirectResponse;

// Route::get('/', function () {
//     return Inertia::render('login');
// })->name('login');

Route::get('/', function(){
    return redirect()->intended(route('login', absolute: false));
})->name('home')->middleware("guest");

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard',[DashboardController::class,"index"])->name('dashboard');
    // Route::get('dashboard', function () {
    //     return Inertia::render('dashboard');
    // })->name('dashboard');
    Route::get('room-management', function () {
        return Inertia::render('room-management');
    })->name('room-management');
    Route::get('/stats', [DashboardController::class, 'stats']);
    Route::get('/bookings-table', [DashboardController::class, 'bookingsTable']);
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
