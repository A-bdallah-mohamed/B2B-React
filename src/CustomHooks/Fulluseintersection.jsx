import React from 'react'
import { useInView } from 'react-intersection-observer';
export default function FulluseIntersection(options) {
    
    return useInView({
        triggerOnce: true,
        threshold: 0.8,
        ...options,
      });
    };

