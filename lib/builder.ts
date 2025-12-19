'use client';

import { Builder } from '@builder.io/react';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Welcome to Test Client 5'
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Discover premium products and exceptional shopping experience'
    },
    {
      name: 'ctaText',
      type: 'string',
      defaultValue: 'Shop Now'
    },
    {
      name: 'ctaLink',
      type: 'string',
      defaultValue: '/products'
    }
  ]
});

Builder.registerComponent(ProductGrid, {
  name: 'ProductGrid',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Featured Products'
    },
    {
      name: 'showFilters',
      type: 'boolean',
      defaultValue: true
    }
  ]
});

Builder.registerComponent(ProductCard, {
  name: 'ProductCard',
  inputs: [
    {
      name: 'name',
      type: 'string',
      defaultValue: 'Product Name'
    },
    {
      name: 'price',
      type: 'number',
      defaultValue: 99.99
    },
    {
      name: 'image',
      type: 'string',
      defaultValue: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      name: 'category',
      type: 'string',
      defaultValue: 'Electronics'
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 4.5
    }
  ]
});

Builder.registerComponent(Features, {
  name: 'Features',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Why Choose Us'
    }
  ]
});

Builder.registerComponent(Newsletter, {
  name: 'Newsletter',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Stay Updated'
    },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'Subscribe to our newsletter for exclusive offers and updates'
    }
  ]
});

Builder.registerComponent(Testimonials, {
  name: 'Testimonials',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'What Our Customers Say'
    }
  ]
});

export { Builder };