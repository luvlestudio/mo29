import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../common/wrapper";
import styled from "styled-components";

const PaddingSection = styled.section``;

function SectionType2({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 뷰포트에 요소가 보이면 isVisible을 true로 설정
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // 요소가 10% 이상 보일 때 트리거
      }
    );

    if (currentRef) {
      observer.observe(sectionRef.current); // section 요소 관찰
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <PaddingSection ref={sectionRef}>
      <Wrapper
        className={isVisible ? "visible" : ""}
        $translateY="20px"
        $transition={{ opacity: 0.5, transform: 0.5 }}
      >
        {children}
      </Wrapper>
    </PaddingSection>
  );
}

export default SectionType2;
