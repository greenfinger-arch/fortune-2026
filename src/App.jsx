import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { zodiacData } from './zodiacData';

/* --- Animations & Global Style --- */
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/images/main_bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-color: #f4f1ea;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    color: #333;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(166, 64, 55, 0.4); }
  70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(166, 64, 55, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(166, 64, 55, 0); }
`;

/* --- Main App Component --- */
const App = () => {
    const [step, setStep] = useState('intro');
    const [birthData, setBirthData] = useState({ year: '', month: '', day: '' });
    const [result, setResult] = useState(null);
    const [remainder, setRemainder] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const bgmRef = useRef(null);
    const sfxRef = useRef(null);

    useEffect(() => {
        bgmRef.current = new Audio('/sounds/korean_bgm.mp3');
        bgmRef.current.loop = true;
        bgmRef.current.volume = 0.3;
        sfxRef.current = new Audio('/sounds/bell_sfx.mp3');
        return () => { if (bgmRef.current) bgmRef.current.pause(); };
    }, []);

    const handleStart = () => {
        if (bgmRef.current) bgmRef.current.play().catch(() => { });
        setIsPlaying(true);
        setStep('input');
    };

    /**
     * [최적화 로직 1] 연도별 정밀 매칭 함수
     */
    const getDetailedResult = (year) => {
        let zodiacIndex = (year - 4) % 12;
        if (zodiacIndex < 0) zodiacIndex += 12;
        const baseData = zodiacData[zodiacIndex];
        const yearlyDetail = baseData.yearly && baseData.yearly[year];

        if (yearlyDetail) {
            // 특정 연도 데이터가 존재하면 해당 데이터로 덮어씌움
            return {
                ...baseData,
                desc: yearlyDetail.desc || baseData.desc,
                detail: yearlyDetail.detail || baseData.detail,
                secret: yearlyDetail.secret || baseData.secret,
                affiliate: yearlyDetail.affiliate || baseData.affiliate
            };
        }
        return baseData; // 연도 데이터 없으면 기본띠 데이터 사용
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sfxRef.current) sfxRef.current.play().catch(() => { });

        const yearNum = parseInt(birthData.year);
        const rem = yearNum % 12;

        setRemainder(rem);
        setResult(getDetailedResult(yearNum)); // 정밀 데이터 세팅
        setStep('loading');

        setTimeout(() => setStep('result'), 2800);
    };

    const toggleSound = () => {
        if (isPlaying) bgmRef.current.pause();
        else bgmRef.current.play().catch(() => { });
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <SoundToggle onClick={toggleSound}>
                    {isPlaying ? "🎐 소리 켬" : "🔇 소리 끔"}
                </SoundToggle>

                {step === 'intro' && (
                    <Section>
                        <YearBadge>2026 丙午年</YearBadge>
                        <MainLogo src="/images/zodiac_main.png" onError={(e) => (e.target.style.display = 'none')} />
                        <MainTitle>병오년 정밀 신년운세</MainTitle>
                        <SubTitle>붉은 말의 기운이 솟구치는 2026년,<br />당신의 타고난 천명을 분석합니다.</SubTitle>
                        <StartButton onClick={handleStart}>운세 문 열기 ➔</StartButton>
                    </Section>
                )}

                {step === 'input' && (
                    <Section>
                        <Title>사주 명당(命堂) 기록</Title>
                        <Instruction>정확한 운명 분석을 위해<br />태어나신 날을 선택해 주세요.</Instruction>
                        <Form onSubmit={handleSubmit}>
                            <GridInputWrapper>
                                <InputGroup>
                                    <Label>년(Year)</Label>
                                    <StyledSelect required onChange={(e) => setBirthData({ ...birthData, year: e.target.value })} defaultValue="">
                                        <option value="" disabled>-</option>
                                        {Array.from({ length: 90 }, (_, i) => 2026 - i).map(y => <option key={y} value={y}>{y}</option>)}
                                    </StyledSelect>
                                </InputGroup>
                                <InputGroup>
                                    <Label>월(Month)</Label>
                                    <StyledSelect required onChange={(e) => setBirthData({ ...birthData, month: e.target.value })} defaultValue="">
                                        <option value="" disabled>-</option>
                                        {Array.from({ length: 12 }, (_, i) => i + 1).map(m => <option key={m} value={m}>{m}</option>)}
                                    </StyledSelect>
                                </InputGroup>
                                <InputGroup>
                                    <Label>일(Day)</Label>
                                    <StyledSelect required onChange={(e) => setBirthData({ ...birthData, day: e.target.value })} defaultValue="">
                                        <option value="" disabled>-</option>
                                        {Array.from({ length: 31 }, (_, i) => i + 1).map(d => <option key={d} value={d}>{d}</option>)}
                                    </StyledSelect>
                                </InputGroup>
                            </GridInputWrapper>
                            <SubmitButton type="submit">운세 풀이 시작</SubmitButton>
                        </Form>
                    </Section>
                )}

                {step === 'loading' && (
                    <Section>
                        <SpinningOrnament src="/images/loading_circle.png" />
                        <LoadingText>천문의 흐름과 오행의 조화를<br />심층 분석하고 있습니다...</LoadingText>
                        <ProgressBar><ProgressFill /></ProgressBar>
                    </Section>
                )}

                {step === 'result' && <ResultPage data={result} index={remainder} birth={birthData} />}
            </Container>
        </>
    );
};

/* --- Result Page Component --- */
const ResultPage = ({ data, index, birth }) => {
    // [최적화 로직 2] 한국식 나이 계산
    const koreanAge = 2026 - parseInt(birth.year) + 1;

    const renderStars = (score) => "★".repeat(score || 3) + "☆".repeat(5 - (score || 3));

    const handleShare = async () => {
        const shareTitle = '2026 병오년 정밀 신년운세';
        const shareText = `[${birth.year}년생 ${data.name}] 2026년 나의 운세 결과:\n"${data.desc.substring(0, 45)}..."\n\n지금 바로 당신의 천명을 확인하세요!`;
        const shareUrl = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
            } catch (err) {
                if (err.name !== 'AbortError') copyFallback(shareUrl);
            }
        } else {
            copyFallback(shareUrl);
        }
    };

    const copyFallback = async (url) => {
        try {
            await navigator.clipboard.writeText(url);
            alert('운세 링크가 클립보드에 복사되었습니다. 📤');
        } catch (err) {
            alert('링크를 복사하여 공유해주세요.');
        }
    };

    return (
        <ResultContainer>
            <OrnamentTop src="/images/ornament_top.png" />

            {/* [최적화 로직 3] 동적 UI - 나이 강조 및 데이터 기반 컬러 적용 */}
            <ResultHeader>
                <ZodiacBadge style={{ backgroundColor: data.color }}>{data.name}</ZodiacBadge>
                <ResultTitle>
                    {birth.year}년생 <AgeHighlight color={data.color}>({koreanAge}세)</AgeHighlight> 천문 기록
                </ResultTitle>
            </ResultHeader>

            <MainCard style={{ borderTop: `4px solid ${data.color}` }}>
                <ZodiacImageBox>
                    <ZodiacImg src={`/images/zodiac_${index}.png`} alt={data.name} />
                </ZodiacImageBox>

                <SectionTitleBox color={data.color}>〔 2026년 총운 〕</SectionTitleBox>
                <SummaryText>{data.desc}</SummaryText>

                <Divider />

                <LuckGrid>
                    {/* 행운 점수 데이터가 없을 경우 기본 3점 처리 */}
                    <LuckItem><LuckLabel>재물</LuckLabel><Stars color="#d4af37">{renderStars(data.luck?.wealth)}</Stars></LuckItem>
                    <LuckItem><LuckLabel>애정</LuckLabel><Stars color="#a64037">{renderStars(data.luck?.love)}</Stars></LuckItem>
                    <LuckItem><LuckLabel>건강</LuckLabel><Stars color="#5a7d6e">{renderStars(data.luck?.health)}</Stars></LuckItem>
                </LuckGrid>

                <DetailBox>
                    <SectionTitleBox color={data.color}>〔 {koreanAge}세 맞춤 상세 분석 〕</SectionTitleBox>
                    <DetailText>{data.detail}</DetailText>
                </DetailBox>

                <SecretCard style={{ borderLeft: `5px solid ${data.color}` }}>
                    <SecretTitle color={data.color}>✨ {data.name} 신년 비책</SecretTitle>
                    <SecretText>{data.secret}</SecretText>
                </SecretCard>

                {/* [최적화 로직 4] 수익화 연동 - 연도별 아이템 노출 */}
                <AffiliateSection>
                    <AffiliateHeader>
                        <AffiliateLabel style={{ backgroundColor: data.color }}>신의 한 수</AffiliateLabel>
                        <AffiliateTitle>운을 틔워줄 {data.name} 수호템</AffiliateTitle>
                    </AffiliateHeader>
                    <ItemBox>
                        <ItemImage src={data.affiliate.img} alt={data.affiliate.name} />
                        <ItemInfo>
                            <ItemName>{data.affiliate.name}</ItemName>
                            <ItemReason>{data.affiliate.reason}</ItemReason>
                            <BuyButton
                                style={{ backgroundColor: data.color }}
                                onClick={() => window.open(data.affiliate.link, '_blank')}
                            >
                                행운의 수호템 확인 ➔
                            </BuyButton>
                        </ItemInfo>
                    </ItemBox>
                </AffiliateSection>
            </MainCard>

            <ButtonGroup>
                <ShareButton onClick={handleShare}>결과 공유하기 📤</ShareButton>
                <RestartButton onClick={() => window.location.reload()}>
                    ↻ 다른 운세 확인하기
                </RestartButton>
            </ButtonGroup>
            <FooterText>© 2026 병오년 전통사주연구소</FooterText>
        </ResultContainer>
    );
};

/* --- Styled Components (기존 보존 및 최적화 추가) --- */

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Section = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.92);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 2px solid #e0d8c3;
`;

const YearBadge = styled.div`
  display: inline-block;
  background: #a64037;
  color: #fff;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MainLogo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 1.8rem;
  color: #2c2c2c;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  background: #a64037;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
  animation: ${pulse} 2s infinite;
  &:hover { background: #8e352e; }
`;

const Title = styled.h2` font-size: 1.5rem; margin-bottom: 15px; `;
const Instruction = styled.p` color: #666; margin-bottom: 30px; line-height: 1.5; `;

const Form = styled.form` display: flex; flex-direction: column; gap: 20px; `;

const GridInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const InputGroup = styled.div` display: flex; flex-direction: column; text-align: left; `;
const Label = styled.label` font-size: 0.8rem; color: #888; margin-bottom: 5px; margin-left: 5px; `;

const StyledSelect = styled.select`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 10px;
`;

const SpinningOrnament = styled.img`
  width: 80px;
  animation: ${rotate} 3s linear infinite;
  margin-bottom: 20px;
`;

const LoadingText = styled.p` font-size: 1.1rem; color: #555; line-height: 1.6; `;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 3px;
  margin-top: 30px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: 100%;
  height: 100%;
  background: #a64037;
  animation: moveProgress 2.8s linear forwards;
  @keyframes moveProgress { from { width: 0; } to { width: 100%; } }
`;

/* --- Result Page Styled Components --- */
const ResultContainer = styled.div` animation: ${fadeIn} 1s ease-out; `;
const OrnamentTop = styled.img` width: 100%; margin-bottom: -10px; `;

const ResultHeader = styled.div` text-align: center; margin-bottom: 25px; `;
const ZodiacBadge = styled.span`
  color: white;
  padding: 4px 12px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
`;
const ResultTitle = styled.h2` font-size: 1.4rem; margin-top: 15px; color: #2c2c2c; `;
const AgeHighlight = styled.span` color: ${props => props.color || '#a64037'}; font-weight: bold; `;

const MainCard = styled.div`
  background: white;
  border-radius: 0 0 20px 20px;
  padding: 30px 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
`;

const ZodiacImageBox = styled.div` text-align: center; margin-bottom: 20px; `;
const ZodiacImg = styled.img` width: 140px; height: 140px; object-fit: contain; `;

const SectionTitleBox = styled.div`
  font-weight: bold;
  color: ${props => props.color || '#a64037'};
  margin-bottom: 15px;
  font-size: 1.1rem;
  text-align: center;
`;

const SummaryText = styled.p` line-height: 1.7; color: #444; text-align: center; font-size: 1.05rem; `;

const Divider = styled.div` height: 1px; background: #eee; margin: 25px 0; `;

const LuckGrid = styled.div` display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 30px; `;
const LuckItem = styled.div` text-align: center; background: #fdfdfd; padding: 10px; border-radius: 10px; `;
const LuckLabel = styled.div` font-size: 0.85rem; color: #888; margin-bottom: 5px; `;
const Stars = styled.div` color: ${props => props.color}; font-size: 0.9rem; `;

const DetailBox = styled.div` margin-bottom: 30px; `;
const DetailText = styled.p` line-height: 1.8; color: #555; background: #f9f9f9; padding: 15px; border-radius: 10px; font-size: 0.95rem; `;

const SecretCard = styled.div`
  background: #fff9f8;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const SecretTitle = styled.div` font-weight: bold; color: ${props => props.color}; margin-bottom: 10px; `;
const SecretText = styled.p` color: #555; line-height: 1.6; font-size: 0.95rem; margin: 0; `;

const AffiliateSection = styled.div` margin-top: 40px; `;
const AffiliateHeader = styled.div` margin-bottom: 15px; `;
const AffiliateLabel = styled.span` color: white; padding: 2px 8px; font-size: 0.75rem; border-radius: 3px; `;
const AffiliateTitle = styled.h3` font-size: 1.1rem; margin-top: 8px; `;

const ItemBox = styled.div` display: flex; gap: 15px; align-items: center; background: #fff; border: 1px solid #eee; padding: 15px; border-radius: 15px; `;
const ItemImage = styled.img` width: 80px; height: 80px; border-radius: 10px; object-fit: cover; `;
const ItemInfo = styled.div` flex: 1; `;
const ItemName = styled.div` font-weight: bold; margin-bottom: 5px; `;
const ItemReason = styled.div` font-size: 0.8rem; color: #777; margin-bottom: 10px; line-height: 1.4; `;
const BuyButton = styled.button` color: white; border: none; padding: 8px 15px; border-radius: 5px; font-size: 0.85rem; cursor: pointer; `;

const ButtonGroup = styled.div` display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 30px; `;
const ShareButton = styled.button` background: #3b5998; color: white; border: none; padding: 15px; border-radius: 12px; cursor: pointer; font-weight: bold; `;
const RestartButton = styled.button` background: #fff; color: #333; border: 1px solid #ddd; padding: 15px; border-radius: 12px; cursor: pointer; font-weight: bold; `;

const FooterText = styled.p` text-align: center; color: #999; font-size: 0.8rem; margin-top: 30px; `;

const SoundToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255,255,255,0.8);
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  z-index: 100;
`;

export default App;