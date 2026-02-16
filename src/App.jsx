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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sfxRef.current) sfxRef.current.play().catch(() => { });

        const rem = parseInt(birthData.year) % 12;
        setRemainder(rem);
        setResult(zodiacData[rem]);
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
                                        {Array.from({ length: 80 }, (_, i) => 2026 - i).map(y => <option key={y} value={y}>{y}</option>)}
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
    const renderStars = (score) => "★".repeat(score) + "☆".repeat(5 - score);

    // [공유하기 기능 업그레이드]
    const handleShare = async () => {
        // 공유될 텍스트 구성 (총평 요약 포함)
        const shareTitle = '2026 병오년 정밀 신년운세';
        const shareText = `[${data.name}] 2026년 나의 운세 결과:\n"${data.desc.substring(0, 45)}..."\n\n지금 바로 당신의 천명을 확인하세요!`;
        const shareUrl = window.location.href;

        if (navigator.share) {
            // 1. 모바일 순정 공유 기능 (Web Share API)
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                console.log('공유 취소 또는 에러:', err);
            }
        } else {
            // 2. PC 또는 미지원 브라우저 (클립보드 복사)
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert('운세 링크가 클립보드에 복사되었습니다. 원하시는 곳에 붙여넣기(Ctrl+V) 하세요! 📤');
            } catch (err) {
                alert('공유하기가 지원되지 않는 환경입니다. 주소창의 링크를 복사해주세요.');
            }
        }
    };

    return (
        <ResultContainer>
            <OrnamentTop src="/images/ornament_top.png" />

            <ResultHeader>
                <ZodiacBadge color={data.color}>{data.name}</ZodiacBadge>
                <ResultTitle>{birth.year}년생 당신을 위한 천문 기록</ResultTitle>
            </ResultHeader>

            <MainCard>
                <ZodiacImageBox>
                    <ZodiacImg src={`/images/zodiac_${index}.png`} alt={data.name} />
                </ZodiacImageBox>

                <SectionTitleBox>〔 2026년 총운 〕</SectionTitleBox>
                <SummaryText>{data.desc}</SummaryText>

                <Divider />

                <LuckGrid>
                    <LuckItem><LuckLabel>재물</LuckLabel><Stars color="#d4af37">{renderStars(data.luck.wealth)}</Stars></LuckItem>
                    <LuckItem><LuckLabel>애정</LuckLabel><Stars color="#a64037">{renderStars(data.luck.love)}</Stars></LuckItem>
                    <LuckItem><LuckLabel>건강</LuckLabel><Stars color="#5a7d6e">{renderStars(data.luck.health)}</Stars></LuckItem>
                </LuckGrid>

                <DetailBox>
                    <SectionTitleBox>〔 상세 운명 분석 〕</SectionTitleBox>
                    <DetailText>{data.detail}</DetailText>
                </DetailBox>

                <SecretCard>
                    <SecretTitle>✨ 신년 비책</SecretTitle>
                    <SecretText>{data.secret}</SecretText>
                </SecretCard>

                {/* 제휴 마케팅 섹션 */}
                <AffiliateSection>
                    <AffiliateHeader>
                        <AffiliateLabel>신의 한 수</AffiliateLabel>
                        <AffiliateTitle>운을 틔워줄 행운의 수호템</AffiliateTitle>
                    </AffiliateHeader>
                    <ItemBox>
                        <ItemImage src={data.affiliate.img} alt={data.affiliate.name} />
                        <ItemInfo>
                            <ItemName>{data.affiliate.name}</ItemName>
                            <ItemReason>{data.affiliate.reason}</ItemReason>
                            <BuyButton onClick={() => window.open(data.affiliate.link, '_blank')}>
                                수호템 확인하기 ➔
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

/* --- Styled Components --- */
const Container = styled.div` max-width: 500px; margin: 0 auto; min-height: 100vh; display: flex; align-items: center; padding: 20px; box-sizing: border-box; `;
const Section = styled.div` width: 100%; background: rgba(255,255,255,0.96); padding: 50px 30px; border: 1px solid #dcd7c9; text-align: center; animation: ${fadeIn} 0.8s ease-out; `;
const MainTitle = styled.h1` font-size: 26px; color: #1a2a44; margin: 20px 0; `;
const SubTitle = styled.p` color: #666; font-size: 15px; margin-bottom: 40px; line-height: 1.6; `;
const StartButton = styled.button` background: #a64037; color: white; border: none; padding: 18px 50px; font-size: 18px; cursor: pointer; border-radius: 2px; font-weight: bold; transition: 0.3s; &:hover { background: #8e352e; } `;
const YearBadge = styled.span` color: #a64037; font-weight: bold; border-bottom: 2px solid #a64037; padding-bottom: 5px; letter-spacing: 2px; `;
const MainLogo = styled.img` width: 120px; margin: 20px auto; display: block; `;
const Title = styled.h2` font-size: 24px; color: #1a2a44; margin-bottom: 10px; `;
const Instruction = styled.p` font-size: 15px; color: #888; margin-bottom: 35px; `;
const Form = styled.form` width: 100%; `;
const GridInputWrapper = styled.div` display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 40px; `;
const InputGroup = styled.div` display: flex; flex-direction: column; border-bottom: 2px solid #dcd7c9; `;
const Label = styled.span` font-size: 11px; color: #a64037; font-weight: bold; margin-bottom: 5px; `;
const StyledSelect = styled.select` border: none; font-size: 18px; padding: 10px 0; text-align: center; outline: none; background: transparent; cursor: pointer; appearance: none; `;
const SubmitButton = styled.button` width: 100%; background: #1a2a44; color: white; border: none; padding: 20px; font-size: 17px; cursor: pointer; font-weight: bold; `;
const LoadingText = styled.p` font-size: 17px; color: #1a2a44; margin: 30px 0; line-height: 1.6; `;
const SpinningOrnament = styled.img` width: 70px; animation: ${rotate} 6s linear infinite; `;
const ProgressBar = styled.div` width: 100%; height: 4px; background: #eee; border-radius: 10px; overflow: hidden; `;
const ProgressFill = styled.div` height: 100%; background: #a64037; animation: 2.8s linear forwards; `;
const SoundToggle = styled.button` position: fixed; top: 20px; right: 20px; background: rgba(255,255,255,0.9); border: 1px solid #dcd7c9; padding: 7px 15px; border-radius: 30px; font-size: 12px; cursor: pointer; z-index: 1000; `;

/* Result Page Styles */
const ResultContainer = styled.div` width: 100%; animation: ${fadeIn} 1s ease-out; `;
const OrnamentTop = styled.img` width: 100%; max-width: 450px; margin: -10px auto 25px; display: block; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1)); `;
const ResultHeader = styled.div` text-align: center; margin-bottom: 25px; `;
const ZodiacBadge = styled.span` background: ${props => props.color}; color: white; padding: 5px 16px; border-radius: 50px; font-size: 13px; font-weight: bold; `;
const ResultTitle = styled.h2` font-size: 20px; color: #1a2a44; margin-top: 12px; `;
const MainCard = styled.div` background: #fffcf5; border: 1px solid #dcd7c9; padding: 35px 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); `;
const ZodiacImageBox = styled.div` width: 140px; height: 140px; margin: 0 auto 30px; background: #fff; border-radius: 50%; border: 2px double #dcd7c9; display: flex; align-items: center; justify-content: center; `;
const ZodiacImg = styled.img` width: 85%; object-fit: contain; `;
const SectionTitle = styled.h3` font-size: 14px; color: #a64037; margin-bottom: 12px; border-left: 3px solid #a64037; padding-left: 8px; text-align: left; `;
const SummaryText = styled.p` font-size: 17px; line-height: 1.8; color: #222; text-align: left; font-weight: 500; `;
const Divider = styled.div` height: 1px; background: #dcd7c9; margin: 25px 0; opacity: 0.6; `;
const LuckGrid = styled.div` display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 25px; `;
const LuckItem = styled.div` text-align: center; background: #fff; padding: 12px 5px; border: 1px solid #f0ede3; `;
const LuckLabel = styled.span` font-size: 11px; color: #888; display: block; margin-bottom: 5px; `;
const Stars = styled.div` color: ${props => props.color}; font-size: 12px; `;
const DetailBox = styled.div` text-align: left; padding: 20px; background: white; border: 1px solid #f0ede3; margin-top: 25px; `;
const DetailText = styled.p` font-size: 15px; color: #555; line-height: 1.7; margin: 0; `;
const SecretCard = styled.div` margin-top: 25px; background: #1a2a44; padding: 25px 20px; color: white; text-align: left; `;
const SecretTitle = styled.h4` color: #d4af37; margin: 0 0 10px; font-size: 15px; `;
const SecretText = styled.p` margin: 0; font-size: 14px; opacity: 0.9; line-height: 1.7; `;

/* Affiliate Section Styles */
const AffiliateSection = styled.div` margin-top: 30px; border: 2px solid #a64037; background: #fff; padding: 20px; animation: ${pulse} 2s infinite; `;
const AffiliateHeader = styled.div` margin-bottom: 15px; border-bottom: 1px solid #f0ede3; padding-bottom: 10px; text-align: left; `;
const AffiliateLabel = styled.span` font-size: 10px; color: white; background: #a64037; padding: 2px 6px; border-radius: 2px; font-weight: bold; `;
const AffiliateTitle = styled.h4` font-size: 16px; color: #1a2a44; margin: 5px 0 0; `;
const ItemBox = styled.div` display: flex; gap: 15px; align-items: center; `;
const ItemImage = styled.img` width: 100px; height: 100px; object-fit: cover; border: 1px solid #eee; `;
const ItemInfo = styled.div` flex: 1; text-align: left; `;
const ItemName = styled.div` font-size: 15px; font-weight: bold; color: #333; margin-bottom: 5px; `;
const ItemReason = styled.div` font-size: 12px; color: #666; line-height: 1.4; margin-bottom: 10px; `;
const BuyButton = styled.button` background: #a64037; color: white; border: none; padding: 8px 15px; font-size: 12px; font-weight: bold; cursor: pointer; width: 100%; transition: 0.3s; &:hover { background: #1a2a44; } `;

const ButtonGroup = styled.div` display: flex; flex-direction: column; gap: 12px; margin-top: 30px; width: 100%; `;
const ShareButton = styled.button` width: 100%; background: #1a2a44; color: white; border: none; padding: 18px; font-size: 17px; font-weight: bold; cursor: pointer; `;
const RestartButton = styled.button` width: 100%; background: white; color: #666; border: 1px solid #dcd7c9; padding: 16px; font-size: 15px; cursor: pointer; display: flex; align-items: center; justify-content: center; &:hover { color: #a64037; border-color: #a64037; } &::before { content: '↺'; margin-right: 8px; font-size: 18px; } `;
const FooterText = styled.p` font-size: 12px; color: #999; margin: 30px 0; text-align: center; `;

export default App;