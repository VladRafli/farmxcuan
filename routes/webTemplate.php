<?php

use App\Http\Controllers\Template\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/template', function () {
    return Inertia::render('Inertia/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/template/dashboard', function () {
    return Inertia::render('Inertia/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/template/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/template/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/template/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
