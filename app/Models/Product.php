<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'desc',
        'SKU',
        'category_id',
        'inventory_id',
        'price',
        'discount_id'
    ];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function inventory() {
        return $this->belongsTo(Inventory::class);
    }

    public function discount() {
        return $this->belongsTo(Discount::class);
    }
}
