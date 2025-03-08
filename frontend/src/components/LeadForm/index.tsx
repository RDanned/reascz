import { useState } from 'react';
import { Form, Input, Select, Button, Space, Result, Steps, Alert } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useForm, Controller } from 'react-hook-form';
import MapSelect from '@/components/MapSelect';
import './LeadForm.scss';
import leadAPI from '@/api/lead.ts';

const {Option} = Select;

interface FormType {
  estateType: 'byt' | 'dům' | 'pozemek';
  region: string;
  district: string;
  fullname: string;
  phone: string;
  email: string;
}

function LeadForm() {
  const [step, setStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    formState: {errors}
  } = useForm<FormType>({mode: 'onBlur'});

  const onSubmit = async (data: FormType) => {
    setIsLoading(true);

    // Simulate longer request to show loading state (not gpt comment)
    setTimeout(async () => {
      try {
        await leadAPI.createLead(data);
        setIsSubmitted(true);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const nextStep = async () => {
    const valid = await trigger(['estateType', 'region', 'district']);
    if (valid) setStep(1);
  };

  if (isSubmitted) {
    return (
      <Result
        status="success"
        icon={<CheckCircleOutlined/>}
        title="Vaše poptávka byla úspěšně odeslána!"
        subTitle="Brzy se vám ozveme."
      />
    );
  }

  return (
    <Form className="lead-form" layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <Steps current={step}>
        <Steps.Step title="Nemovitost"/>
        <Steps.Step title="Kontakt"/>
      </Steps>

      {step === 0 && (
        <>
          <Form.Item label="Typ nemovitosti" validateStatus={errors.estateType ? 'error' : ''}
                     help={errors.estateType?.message}>
            <Controller
              name="estateType"
              control={control}
              rules={{required: 'Vyberte typ nemovitosti'}}
              render={({field}) => (
                <Select {...field} placeholder="Vyberte typ nemovitosti">
                  <Option value="byt">Byt</Option>
                  <Option value="dům">Dům</Option>
                  <Option value="pozemek">Pozemek</Option>
                </Select>
              )}
            />
          </Form.Item>

          <Form.Item
            label="Region a okres"
            validateStatus={(errors.region || errors.district) ? 'error' : ''}
            help={errors.region?.message || errors.district?.message}
          >
            <Controller
              name="region"
              control={control}
              rules={{required: 'Vyberte kraj'}}
              render={() => (
                <MapSelect
                  onRegionSelect={(value) => {
                    setValue('region', value, {shouldValidate: true});
                    setValue('district', '', {shouldValidate: true});
                  }}
                  onDistrictSelect={(value) => {
                    setValue('district', value, {shouldValidate: true});
                  }}
                />
              )}
            />

            <Controller
              name="district"
              control={control}
              rules={{required: 'Vyberte okres'}}
              render={() => <></>}
            />
          </Form.Item>


          <Button type="primary" onClick={nextStep}>
            Další
          </Button>
        </>
      )}

      {step === 1 && (
        <>
          <Form.Item label="Celé jméno" validateStatus={errors.fullname ? 'error' : ''} help={errors.fullname?.message}>
            <Controller
              name="fullname"
              control={control}
              rules={{required: 'Zadejte celé jméno'}}
              render={({field}) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item label="Telefonní číslo" validateStatus={errors.phone ? 'error' : ''} help={errors.phone?.message}>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: 'Zadejte telefonní číslo',
                pattern: {value: /^\+420\d{9}$/, message: 'Zadejte platné české číslo'}
              }}
              render={({field}) => <Input {...field} />}
            />
          </Form.Item>

          <Form.Item label="Email" validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
            <Controller
              name="email"
              control={control}
              rules={{required: 'Zadejte email', pattern: {value: /^\S+@\S+\.\S+$/, message: 'Zadejte platný email'}}}
              render={({field}) => <Input {...field} />}
            />
          </Form.Item>

          <Space direction="vertical">
            <Space>
              <Button onClick={() => setStep(0)}>Zpět</Button>

              <Button type="primary" htmlType="submit" loading={isLoading}>
                Odeslat
              </Button>
            </Space>
            {isError && <Alert message="Něco se pokazilo, zkuste to prosím znovu." type="error"/>}
          </Space>
        </>
      )}
    </Form>
  );
}

export default LeadForm;