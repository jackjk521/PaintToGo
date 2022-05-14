<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'product_id' => $this->product_id,
            'brand_id' => $this->brand_id,
            'utility_id' => $this->utility_id,
            'product_name' => $this->product_name,
            'price' => $this->price,
            'retail_price' => $this->retail_price,
            'unit_sold_at' => $this->unit_sold_at
        ];
    }
}