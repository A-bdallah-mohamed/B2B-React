import React from 'react'
import { useInView } from 'react-intersection-observer';
export default function useIntersection(options) {
    
    return useInView({
        triggerOnce: true,
        threshold: 0.1,
        ...options,
      });
    };

